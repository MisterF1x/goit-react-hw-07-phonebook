import { IconSize } from 'components/constant';
import { ContactItem, ContactParagraph, TrashBtn } from './Contacts.styled';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selector';
import { deleteContact } from 'redux/operation';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const sortedContacts = contacts.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
  return (
    <ul>
      {sortedContacts.map(({ id, name, phone }) => {
        return (
          <ContactItem key={id}>
            <ContactParagraph>{name}</ContactParagraph>
            <ContactParagraph>{phone}</ContactParagraph>
            <TrashBtn
              type="button"
              aria-label="delete"
              onClick={() => dispatch(deleteContact(id))}
            >
              <FaTrashAlt size={IconSize.sm} />
            </TrashBtn>
          </ContactItem>
        );
      })}
    </ul>
  );
};
