import React from 'react'
import ClassCard from '../../common/cards/class/ClassCard'
import { StyledButton, StyledItalicLegend, StyledSearchButton } from './styles'
import { StyledLabelName, StyledLegend, StyledSublabel, marginBottom } from '../../styles/GlobalStyles'
import InputText from '../../common/inputs/text/InputText'
import { IoMdSearch as SearchIcon, IoIosArrowForward as ArrowIcon } from 'react-icons/io'
import CircleLoader from '../../common/loader/Circle/CircleLoader'
import { isEmptyObject } from '../../../utils'

const StepFive = (props) => {
  const {
    state,
    onChange,
    errors,
    handleClickSearch,
    handleKeyDownSearch,
    dataSearch,
    loading
  } = props

  const ClassesFound = () => (
    <>
      <StyledSublabel>PRODUCTOS</StyledSublabel>
      <StyledItalicLegend>*Agregar texto de que cada clase elegida es un registro diferente</StyledItalicLegend>
      {
        dataSearch.map((elem) => <ClassCard {...elem} key={elem.title} />)
      }
      <StyledButton>
        Quiero agregar mas clases a mi registro
        <ArrowIcon size='18px' />
      </StyledButton>
    </>
  )

  const SearchResults = () => {
    if (typeof dataSearch === 'object') {
      if (!isEmptyObject(dataSearch)) {
        return <ClassesFound />
      }
      return null
    }
    return <StyledSublabel>{dataSearch}</StyledSublabel>
  }

  return (
    <>
      <div className='col-md-10 col-12 px-4 mt-md-5 mt-3'>
        <StyledLabelName>¿A que seccion pertenece?</StyledLabelName>
        <StyledLegend>
          Busque las clases en las que desea registrar su marca comercial, segun los productos o servicios para los que
          se utilizara la marca.
        </StyledLegend>
      </div>

      <div className='col-md-7 col-12 px-4 d-flex align-items-end'>
        <div style={{ width: 'calc(100% - 30px)' }}>
          <InputText
            {...state.productService}
            onChange={onChange}
            error={errors.productService}
            className='search-input'
            onKeyDown={handleKeyDownSearch}
          />
        </div>
        <StyledSearchButton onClick={handleClickSearch}>
          {
            loading
              ? <CircleLoader />
              : <SearchIcon />
          }
        </StyledSearchButton>
      </div>

      <div className='col-md-9 col-12 px-4' style={marginBottom}>
        <SearchResults />
      </div>
    </>
  )
}

export default StepFive
