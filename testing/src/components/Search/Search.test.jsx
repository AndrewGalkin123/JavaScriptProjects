import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from './Search'

const onChange = jest.fn();

describe('Search component', () => {
    it('renders Search component', () => {
        render(
            <Search value="" onChange={onChange}>
                Find:
            </Search>
        )
        expect(screen.getByText(/find/i)).toBeInTheDocument()
    })
    it('renders without children' , () => {
        render(
            <Search value="" onChange={onChange}/>
               
          
        )
        expect(screen.getByText(/search/i)).toBeInTheDocument()
    })
    it('renders without placeholder', () => {
        render(
            <Search value="" onChange={onChange}/>
               
          
        )
        expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument()
    })
    it('custom placeholder', () => {
        render(<Search value="" onChange={onChange} placeholder='find post'/>)

        expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument()
    })
    it('onChange works', () => {
        render(<Search value="" onChange={onChange}>Find:</Search>)

        userEvent.type(screen.getByRole('textbox'), 'React')

        expect(onChange).toHaveBeenCalledTimes(5)
    })

    it('dinamyc styles work', () => {
        render(<Search value='abc' onChange={onChange} />)

        expect(screen.getByRole('textbox')).toHaveClass('input')
        expect(screen.getByRole('textbox')).toHaveClass('filled')
        expect(screen.getByText('Search')).toHaveClass('label')
     
    })

    it('Search snapshot',() => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const search = render(
            <Search value="" onChange={onChange}>
                Find:
            </Search>
        )
        expect(search).toMatchSnapshot()
    })
})