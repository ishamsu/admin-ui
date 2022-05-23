import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from './ErrorBoundary';

afterEach(cleanup)

it ('render ErrorBoundary', ()=>{
    render(<ErrorBoundary></ErrorBoundary>)
})