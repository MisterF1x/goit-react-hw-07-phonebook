import { FormatedPhoneNumber } from './NumberField.styled';
import PropTypes from 'prop-types';

export const NumberField = ({ field, form, ...props }) => {
  return (
    <>
      <FormatedPhoneNumber
        {...field}
        {...props}
        name={field.name}
        format="+380 (##) ### ####"
        mask="_"
      />
    </>
  );
};

NumberField.propTypes = {
  field: PropTypes.objectOf().isRequired,
  form: PropTypes.objectOf().isRequired,
};
