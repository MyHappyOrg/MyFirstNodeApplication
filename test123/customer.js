/* eslint-disable no-unused-expressions */

const CustomerImport = require('ct-customer-import');

const customer = {
  id: '111',
  customerNumber: 'Name111',
  firstName: 'FirstName111',
  lastName: 'LastName111',
  email: 'testmail_1@gmail.com'
};
const config = {
  sphereClientConfig: {
    config: {
      project_key: '',
      client_id: '5rFIDs12injxE-HY9ImbJmRn',
      client_secret: 'OjAXuhZD58FRRjvdPba8Egzk_h5W5Sl6',
      api_url: 'https://api.us-central1.gcp.commercetools.com',
      auth_url: 'https://auth.us-central1.gcp.commercetools.com'
    },
    defaultShippingAddress: 0,
    defaultBillingAddress: 0
  }
};
const customerImport = CustomerImport(config);

// load customer groups so they can be resolved to references
customerImport
  .loadCustomerGroups()
  .then(() => customerImport.importCustomer(customer))
  .then(() => {
    // done importing the customer
    // look at the summary to see errors
    customerImport.summary;
    // the summary hast the following structure
    // {
    //   errors: [],
    //   inserted: [<some-email>],
    //   successfullImports: 1
    // }
  });
