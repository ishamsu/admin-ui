import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckBox from './CheckBox';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

it ('render checkbox', ()=>{
    render(<CheckBox></CheckBox>)
})


it ('should be checked checkbox when clicking', ()=>{
    render(<CheckBox className="button--primary" ></CheckBox>)
    userEvent.click(screen.getByTestId('checkbox'))
    expect(screen.getByTestId('checkbox')).toBeChecked()
})


