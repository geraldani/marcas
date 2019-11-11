import styled from 'styled-components'

const StyledSelect = styled.select`
  & option[disabled]{
    color: grey;
    font-style: italic;
    background: transparent;
  }:-
  &:-internal-list-box option:checked{
    color: yellow!important;
     background: linear-gradient(#f48024,#f48024);
    background-color: #f48024 !important; /* for Internet exolorer */
  } 
  &[multiple]{

  }

`
export { StyledSelect }
