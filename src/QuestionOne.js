import React from 'react'

const QuestionOne = () => {
  return (
    <form style={{ padding: '20px', maxWidth: '400px' }} onSubmit={(e) => {e.preventDefault(); }}>
      <label htmlFor="question1">Question 1: How do you feel about the project?</label><br />
      <input type="text" id="question1" name="question1" placeholder="Enter your feelings here..." style={{ width: '100%', marginBottom: '10px' }} /><br />
      <button type="submit">Submit</button>
  </form>
  )
}

export default QuestionOne