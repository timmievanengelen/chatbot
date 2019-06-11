# 123autobot
Repository for our Laatste Groepje Chatbot

# How it works

botui.message.add
‌
Met de message.add functie kan je een nieuw chatbericht van de bot toevoegen. Op deze manier kan je dus de bot een berichtje laten sturen.

botui.message.add({
   content: 'Hoi, wat wil je doen?'
});
botui.action.button
‌
Door een action.button toe te voegen kan je de gebruiker een keuze laten maken door knoppen te gebruiken. Je kan zo bijvoorbeeld antwoord geven op de vorige vraag:

botui.action.button({
   action: [
               {   
                   text: 'Iemand spreken',
                   value: 'is'
               },
               {
                   text: 'Probleem vaststellen',
                   value: 'pv'
               },
               {
                   text: 'Bestel status bekijken',
                   value: 'bsb'
               }
   ]
})
‌
.then
‌
Met een .then functie kan je de input van de vorige vraag meenemen. Als voorbeel op de vorige vraag: wanneer er op "Probleem vaststellen" wordt geklikt zal de bot je naar een ander deel van de flow sturen.

.then(function (res) ({
      if (res.value == 'pv') {
      autoBot.askForCar();
})
botui.action.text
‌
Met de action.text functie kan de gebruiker tekstuele input geven aan de bot. Wij gebruiken dit om het nummerbord van de gebruiker op te vragen.

botui.action.text({
   action: {
   placeholder: 'XBXB54'
},

