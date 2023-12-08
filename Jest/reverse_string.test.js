import reverseString from './task/task_01';

test(
    "Проверяем реверс строки",
    () => {
        expect(reverseString("hello www")).toBe("www olleh")
    }
)

