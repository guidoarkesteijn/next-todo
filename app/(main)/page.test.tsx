import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Index from "./page";

let title : string = "Welcome!";

test('TodoItem', () => {
    const wrapper = render(<Index />)

    expect(wrapper.container.querySelector("h1")?.innerHTML).toBe(title)
});