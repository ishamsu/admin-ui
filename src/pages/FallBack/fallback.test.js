import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FallBack from './FallBack';

afterEach(cleanup)

it ('render FallBack', ()=>{
    render(<FallBack></FallBack>)
})