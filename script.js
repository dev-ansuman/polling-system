const addPollButton = document.getElementById('addPollButton')

addPollButton.addEventListener('click', () => {
    const poll = document.createElement('div')

    const pollName = document.createElement('span')
    const pollCount = document.createElement('span')
    pollCount.classList.add('count')
    const upvoteButton = document.createElement('button')
    const deleteButton = document.createElement('button')



    pollName.innerText = document.getElementById('addInput').value
    let count = 0;
    pollCount.innerText = count;
    upvoteButton.innerText = 'upvote'
    deleteButton.innerText = 'remove'



    upvoteButton.addEventListener('click', () => {
        count++;
        pollCount.innerText = count
    })


    poll.append(pollName,
        pollCount,
        upvoteButton,
        deleteButton)

    deleteButton.addEventListener('click', () => {
        poll.remove()
    })

    if (pollName.innerText) {

        const polls = document.getElementById('polls')
        polls.append(poll)
    }



})


const pollCount = document.querySelectorAll('.count')
const totalVotes = document.querySelector('.totalVotes')
let totalVote = 0

pollCount.forEach(element => {
    totalVote += Number(element)
});
totalVotes.innerText = totalVote