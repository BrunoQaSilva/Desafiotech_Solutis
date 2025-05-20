const key = 'be1e439c5245f5e363f306304c6755c6'
const token = 'ATTAbb75a6224f55df9bbfa882f1e374d434c69852750bfcb01aa6682579a82fa68d787284FC'
let boardId = ''
let cardId = ''

describe('Trello API Test Suite', () => {
  it('Deve criar um board', () => {
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/boards/?name=BoardTeste&key=${key}&token=${token}`,
    }).then((response) => {
      expect(response.status).to.eq(200)
      boardId = response.body.id
    })
  })

  it('Deve criar um card', () => {
    // Primeiro criar uma lista (necessária para criar um card)
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/boards/${boardId}/lists?name=ListaTeste&key=${key}&token=${token}`,
    }).then((resLista) => {
      const listId = resLista.body.id

      cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/cards?idList=${listId}&name=CardTeste&key=${key}&token=${token}`,
      }).then((resCard) => {
        expect(resCard.status).to.eq(200)
        cardId = resCard.body.id
      })
    })
  })

  it('Deve excluir o card', () => {
    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/cards/${cardId}?key=${key}&token=${token}`,
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Deve excluir o board', () => {
    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/boards/${boardId}?key=${key}&token=${token}`,
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
