import { render, cleanup, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup)

it ('should render button with label', ()=>{
    const {getByTestId}= render(<Button label="save"></Button>)
    expect(getByTestId('button').textContent).toBe('save')
})

it ('should render button with class primary', ()=>{
render(<Button className="button--primary" ></Button>)
const primaryButton = screen.getByTestId('button')
expect(primaryButton).toHaveClass('button--primary') // WARNING(Needed to implemented): here style properties are also needed to be checked to make sure its primary button
})

it ('should render button with class primary', ()=>{
    render(<Button className="button--danger"></Button>)
    const dangerButton = screen.getByTestId('button')
    expect(dangerButton).toHaveClass('button--danger') // WARNING(Needed to implemented): here style properties also needed to be checked to make sure the appropriate styles are applied to the button
})

it('should render a disabled button with the class of primary', () => {
    render(<Button className="button--primary" isDisabled={true} />)
    const primaryButtonDisabled = screen.getByTestId('button')
    expect(primaryButtonDisabled).toHaveClass('button--primary')
    expect(primaryButtonDisabled).toBeDisabled()
  })

