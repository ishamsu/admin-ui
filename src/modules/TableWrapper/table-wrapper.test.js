import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableWrapper from './TableWrapper';

afterEach(cleanup)

it ('render TableWrapper', ()=>{
    render(<TableWrapper></TableWrapper>)
})