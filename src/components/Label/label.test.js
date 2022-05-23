import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Label from './Label';

afterEach(cleanup)

it ('render Label', ()=>{
    render(<Label></Label>)
})