/**
 * @jest-environment jsdom
 */

// the above is a docstring, a special comment that in this case replaces the jest config file


// test required files are setup for exports in setUpTests.js and run in package.json

import { screen } from '@testing-library/react';

import Header from '.';


describe('Header', () => {

    beforeEach(() => {
        render(<Header title="test" />);
    })


    test("It displays a heading with appropriate text", () => {

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toEqual("");
    })

});
