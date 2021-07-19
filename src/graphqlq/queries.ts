import { gql } from "@apollo/client";

// Apollo GraphQL queries for pulling data from SWAPI 

export const GET_ALL_PEOPLE: string | string[] | any = gql`

query ($page: Int!) {
  getPeople(page: $page) {
    count
    next
    previous
    results {
      name
      height
      mass
      gender
      homeworld {
        name
      }
    }
  }
}`;

export const GET_PERSON_BY_NAME: string | string[] | any = gql`
#GraphQL query for fetching a specific person per page

query ($name: String!) {
  getPerson(name: $name) {
    count
    next
    previous
    results {
      name
      height
      mass
      gender
      homeworld {
        name
      }
    }
  }
}`;
