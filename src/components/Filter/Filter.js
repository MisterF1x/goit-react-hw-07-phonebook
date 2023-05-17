import { IconSize } from 'components/constant';
import {
  FilterBtn,
  FilterGroupBlock,
  FilterInput,
  FilterLabel,
  FilterSpan,
} from './Filter.styled';
import { FaRegWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from 'redux/filterSlice';
import { selectorFilter } from 'redux/selector';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectorFilter);
  return (
    <form>
      <FilterGroupBlock>
        <FilterLabel>
          <FilterSpan>Find contacts by name</FilterSpan>
          <FilterInput
            type="text"
            value={filter}
            onChange={e => dispatch(setValue(e.currentTarget.value.trim()))}
          />
        </FilterLabel>
        <FilterBtn type="reset" onClick={() => dispatch(setValue(''))}>
          <FaRegWindowClose size={IconSize.sm} />
        </FilterBtn>
      </FilterGroupBlock>
    </form>
  );
};
