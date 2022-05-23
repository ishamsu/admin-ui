import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pagination from './Pagination';

const slice = ["one", "two", "three"]
const range = [1,2]
const page = 1
afterEach(cleanup)

it ('render Pagination', ()=>{
    render(<Pagination  range={range} slice={slice}  page={page}></Pagination>)
})

