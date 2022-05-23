import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Popup from './Popup';

afterEach(cleanup)

it ('render Popup', ()=>{
    render(<Popup></Popup>)
})