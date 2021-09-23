import styled from "styled-components";

const Home = styled.div`
  .awssld__content {
    background-color: black;
  }

  .awssld__controls__arrow-left:before,
  .awssld__controls__arrow-left:after,
  .awssld__controls__arrow-right:before,
  .awssld__controls__arrow-right:after {
    background-color: #76c047;
  }
  h2::before,
  h2::after {
    display: inline-block;
    content: "";
    border-top: 3px solid white;
    width: 6rem;
    transform: translateY(-0.5rem);
  }
  h2::before {
    margin: 0 1rem 0 0;
  }
  h2::after {
    margin: 0 1rem;
  }
  .seprator {
    background-color: #292929;
    height: 2px;
  }
  .caption-text {
    font-size: 1.5rem;
  }
  .search-icon {
    position: absolute;
    top: 1px;
    left: 10px;
    font-size: 23px;
  }
  .search-clear-icon {
    position: absolute;
    top: 1px;
    right: 10px;
    font-size: 23px;
  }
  @media screen and (max-width: 767px) {
    .mobile-spacing {
      width: 90vw;
    }
    /* h2::before,
        h2::after {
            width: 3rem;
        }
        h2::before{
            margin: 0 0.5rem 0 0;
        }
        h2::after{
            margin: 0 0.5rem;
        } */
  }
  /* @media screen and (max-width: 576px) {
        h2::before,
        h2::after {
            width: 2rem;
        }
        h2::before{
            margin: 0 0.2rem 0 0;
        }
        h2::after{
            margin: 0 0.2rem;
        }
    }
    @media screen and (max-width: 340px) {
        h2::before,
        h2::after {
            width: 1rem;
        }
        h2::before{
            margin: 0 0.2rem 0 0;
        }
        h2::after{
            margin: 0 0.2rem;
        }
    } */
`;
export default Home;
