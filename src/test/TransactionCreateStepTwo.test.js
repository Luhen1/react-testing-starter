import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TransactionCreateStepTwo from "components/TransactionCreateStepTwo"

// Unit tests
// test('on initial render, the payment button is disabled', async () => {
//     render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>);

//     // screen.debug(); // kinda ignores data and executes the program
//     // screen.getByRole(''); diferent from the debug as it uses especific data 
//     // expect( screen.getByRole('button', {name: /pay/i})).toBeEnabled(); // the tests passes even tho the payment button is enabled. this is a case to resolve. But its enabled in a fraction of time. problem with formik 
//     // expect( await screen.findByRole('button', {name: /pay/i})).toBeEnabled(); 
//     expect( await screen.findByRole('button', {name: /pay/i})).toBeDisabled (); 
// })

//unit test
// test('if an amount and note is entered, the pay button becomes enabled', async () => {
//     render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>);

//     userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
//     userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

//     // screen.getByRole(' '); // shows you a better way to analise 
//     expect( await screen.findByRole('button', {name: /pay/i})).toBeEnabled(); 
// })

//integration tests with 2 unit tests above - better describes how a user should use the application
test('if an amount and note is entered, the pay button becomes enabled', async () => {
    render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>);
    
    // screen.debug(); // kinda ignores data and executes the program
    // screen.getByRole(''); diferent from the debug as it uses especific data 
    // expect( screen.getByRole('button', {name: /pay/i})).toBeEnabled(); // the tests passes even tho the payment button is enabled. this is a case to resolve. But its enabled in a fraction of time. problem with formik 
    // expect( await screen.findByRole('button', {name: /pay/i})).toBeEnabled(); 
    expect( await screen.findByRole('button', {name: /pay/i})).toBeDisabled (); 

    userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

    // screen.getByRole(' '); // shows you a better way to analise 
    expect( await screen.findByRole('button', {name: /pay/i})).toBeEnabled(); 
})