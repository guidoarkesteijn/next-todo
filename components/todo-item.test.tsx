import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import TodoItem from "./todo-item";

let title : string = "Test";

test('Title Test', () => {


    expect(title).toBe(title);
});

test('TodoItem', () => {
    const date = new Date();

    const wrapper = render(<TodoItem id="" created_at={date} is_complete={false} title="" user_id="" />)

    expect(wrapper.container.querySelector(".notifications")?.childNodes.length).toBe(1);
});