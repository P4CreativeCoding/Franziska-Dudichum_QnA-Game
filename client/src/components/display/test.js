import { render,fireEvent, screen } from '@testing-library/react';
import DisplayQuestion from './displayQuestion';

describe('DisplayQuestion', () => {
  test('should set a random question', () => {
    render(<DisplayQuestion />);
    const randomQuestionElement = screen.getByTestId('random-question');
    expect(randomQuestionElement).toBeInTheDocument();
  });

  test('should set a different random question on each call', () => {
    render(<DisplayQuestion />);
    const firstRandomQuestionElement = screen.getByTestId('random-question');

    // Call the function again
    const secondRandomQuestionElement = screen.getByTestId('random-question');

    expect(secondRandomQuestionElement).toBeInTheDocument();
    expect(secondRandomQuestionElement).not.toEqual(firstRandomQuestionElement);
  });

  test('should display the selected question when a question button is clicked', () => {
    render(<DisplayQuestion />);
    const questionButtons = screen.getAllByTestId('question-button');
    const firstQuestionButton = questionButtons[0];

    // Click the first question button
    fireEvent.click(firstQuestionButton);

    const selectedQuestionElement = screen.getByTestId('selected-question');
    expect(selectedQuestionElement).toBeInTheDocument();
  });

  test('should clear the selected question when "New Question" button is clicked', () => {
    render(<DisplayQuestion />);
    const questionButtons = screen.getAllByTestId('question-button');
    const firstQuestionButton = questionButtons[0];
    const newQuestionButton = screen.getByTestId('new-question-button');

    // Click the first question button
    fireEvent.click(firstQuestionButton);

    const initialSelectedQuestionElement = screen.getByTestId('selected-question');

    // Click the "New Question" button
    fireEvent.click(newQuestionButton);

    const newQuestionElement = screen.getByTestId('random-question');
    const updatedSelectedQuestionElement = screen.queryByTestId('selected-question');

    expect(newQuestionElement).toBeInTheDocument();
    expect(updatedSelectedQuestionElement).toBeNull();
    expect(newQuestionElement).not.toEqual(initialSelectedQuestionElement);
  });

  test('should not display a "New Question" button when a question is selected', () => {
    render(<DisplayQuestion />);
    const questionButtons = screen.getAllByTestId('question-button');
    const firstQuestionButton = questionButtons[0];

    // Click the first question button
    fireEvent.click(firstQuestionButton);

    const newQuestionButton = screen.queryByTestId('new-question-button');
    expect(newQuestionButton).toBeNull();
  });
});
