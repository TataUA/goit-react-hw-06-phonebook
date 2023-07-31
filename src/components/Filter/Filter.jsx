import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { selectorFilter } from 'redux/selectors';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  function onFilterContact(e) {
    dispatch(setFilter(e.target.value));
  }

  return (
    <Label htmlFor="">
      Find contacts by name
      <Input
        type="text"
        value={filter}
        placeholder="Search..."
        onChange={onFilterContact}
      />
    </Label>
  );
};
