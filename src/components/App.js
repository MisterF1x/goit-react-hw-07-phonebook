import { Global } from '@emotion/react';
import { Layout } from './Layout/Layout';
import { Style } from './GlobalStyle';
import { ContactForm } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Title } from './Contacts/Contacts.styled';
import { ContactsFilter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from 'redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import { Loading } from './Loading/Loading';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectorContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      {!!items.length && (
        <>
          <Title>Contacts</Title>
          <ContactsFilter />
          {isLoading && !error && <Loading />}
          <Contacts />
        </>
      )}
      <Global styles={Style} />
    </Layout>
  );
};
