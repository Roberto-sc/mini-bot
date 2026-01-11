

const API_URL = 'http://localhost:8080/api/chatbot';

export async function sendMessage(message) {

    
    const response = await fetch(API_URL,{

        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({message}),
    }
    )

    if(!response.ok){
        throw new Error('Error en la respuesta del servidor')
    }
    
    return response.json();
}