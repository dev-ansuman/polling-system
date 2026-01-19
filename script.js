const addPollButton = document.getElementById('addPollButton')

addPollButton.addEventListener('click', () => {
    const poll = document.createElement('div')
    poll.classList.add('poll')

    const pollPart1 = document.createElement('div')
    pollPart1.classList.add('pollPart1')
    const pollPart2 = document.createElement('div')
    pollPart2.classList.add('pollPart2')

    const pollName = document.createElement('span')
    pollName.classList.add('pollName')
    const pollCount = document.createElement('span')
    pollCount.classList.add('count')
    const upvoteButton = document.createElement('button')
    upvoteButton.innerText = 'Upvote'
    upvoteButton.classList.add('actionButton')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Remove'
    deleteButton.classList.add('actionButton')

    let userInput = document.getElementById('addInput').value

    if (userInput.length <= 20) {
        pollName.innerText = userInput
        let count = 0;
        pollCount.innerText = count;


        upvoteButton.addEventListener('click', () => {
            count++;
            pollCount.innerText = count
            display()
        })

        pollPart1.append(pollName, pollCount)
        pollPart2.append(upvoteButton, deleteButton)

        poll.append(pollPart1, pollPart2)

        deleteButton.addEventListener('click', () => {
            poll.remove()
        })

        if (pollName.innerText) {
            const polls = document.getElementById('polls')
            polls.append(poll)
        }

        console.log(userInput)
        document.getElementById('addInput').value = ''
        console.log(userInput)
    }

})

const display = () => {
    let maximumVotes = 0
    const pollCount = document.querySelectorAll('.count')
    const totalVotes = document.querySelector('.totalVotes')
    let totalVoteCount = 0

    pollCount.forEach(element => {
        let count = Number(element.innerText)
        if (count > maximumVotes) {
            maximumVotes = count
        }
        totalVoteCount += count
    });
    totalVotes.innerText = totalVoteCount
    // console.log(maximumVotes)


    // Get Poll with maximum votes
    const highestVote = document.querySelector('.highestVote')
    let pollNames = ''
    pollCount.forEach(poll => {
        if (Number(poll.innerText) === maximumVotes) {
            const pollName = poll.parentNode.querySelector('.pollName')
            pollNames += `${pollName.innerText} `;
        }
    })
    highestVote.innerText = pollNames.replaceAll(' ', ', ')
}