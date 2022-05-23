import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

afterEach(cleanup)

it ('render Input', ()=>{
    render(<Input></Input>)
})