import { useHistory } from "react-router-dom";
import avatar from '../assets/avatar.png';
import {
  StyledCardContent,
  StyledRoundedBtn,
  StyledCard,
  StyledSpan,
  Container,
  Avatar,
 // TitleStyle
} from './StyledComponents';

// const styles = {
//  title: {
//    color: 'black',
//    fontSize: '2.25rem',
//    fontWeight: 400,
//    <TitleStyle style={styles.title}>List of People</TitleStyle>
//  },
// }

const People = ({ people }: any) => {
  const history = useHistory();

  const handleClick = (person: any) => {
    const url = person.name.trim().split(' ').join('+')
    history.push(`/details/${url}`, { from: 'Home', person: person })
  }

  return (

    <Container>
    <Container style={{ paddingBottom: 70}}>
      {
        people.map((person: any, index: string | number) => (
          <StyledCard key={ index }>
            
            <Avatar>
              <img alt="Avatar" src={avatar} />
            </Avatar>

            <StyledCardContent>
              <StyledSpan style={{ alignSelf: 'flex-start' }}>{ person.name }</StyledSpan>
              <StyledRoundedBtn
                onClick={() => handleClick(person)}>
                Details
              </StyledRoundedBtn>
            </StyledCardContent>
          </StyledCard>
        ))
}
    </Container>
    </Container>
  );
};

export default People;
