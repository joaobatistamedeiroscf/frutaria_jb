import style from './Register.module.css'
import { useState } from 'react';


interface Fruit {
        name:string , 
        price: string, 
        description: string , 
        image: string
    }

    interface Errors {
        name:string , 
        price:string , 
        description:string ,
        image:string
    }


function RegisterFruits() {

    
    
    const [fruit, setFruit] = useState<Fruit>({
        name: '',
        price: '',
        description: '',
        image: ''
    });

    const [errors, setErrors] = useState<Errors>({
        name: '',
        price: '',
        description: '',
        image: ''
    });

    const [sucesso , setSucesso] = useState('') ;

    const validateForm = ():boolean => {
        let isvalid = true ; 

        const newErrors: Errors = {
            name: '',
            price: '',
            description: '',
            image: ''
        };

        if(fruit.name.trim() === ""){
            newErrors.name = 'O nome da fruta é obrigatório.';
            isvalid = false;
        }

        if(!fruit.price || Number(fruit.price) <= 0 ){
            newErrors.price = 'O preço da fruta deve ser maior que 0.';
            isvalid = false;
        }

        if(fruit.description.trim() === ""){
            newErrors.description = 'A descrição da fruta é obrigatória.';
            isvalid = false;
        }

        if(fruit.image.trim() === ""    ){
            newErrors.image = 'A URL da imagem da fruta é obrigatória.';
            isvalid = false;
        }

        setErrors(newErrors);
        return isvalid;
    }

        const fruitAlreadyExists = async (name: string): Promise<boolean> => {
            const response = await fetch('http://localhost:3000/fruits');
            const fruits: Fruit[] = await response.json();

            return fruits.some(
            fruit =>
            fruit.name.trim().toLowerCase() === name.trim().toLowerCase()
            );
            };


    

    

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        console.log('Clicando no botão de submit') ;


        if(!validateForm()){
            return;
        }

        const alreadyExists = await fruitAlreadyExists(fruit.name) ;

        if(alreadyExists){
            setErrors(prevErrors => ({
                ...prevErrors,
                name: 'Já existe uma fruta com esse nome.'
            }));
            return;
        }
            
        try {
              const PriceFormatted = {
            ...fruit , 
            price : Number(fruit.price)
        } ; 
        
        const response = await fetch('http://localhost:3000/fruits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(PriceFormatted),
        });

        if(response.ok){
            setSucesso('Fruta cadastrada com sucesso!');
            console.log("Fruta cadastrada:" ,  PriceFormatted) ; 
               
            setFruit({
                    name: '',
                    price: '',
                    description: '',
                    image: ''
                });
            
            setErrors({
                name: '' , 
                price: '' , 
                description: '' , 
                image: ''
            });

            // Limpar mensagem de sucesso após 3 segundos
            setTimeout(() => setSucesso(''), 3000);

        }else {
            alert('Erro ao cadastrar a fruta.');
        }
        
    } catch (error) {
        alert('Erro ao cadastrar a fruta.');
        console.error('Error:', error);            
       }
    };

    return (
    <div className = {style.container}>
        <div className= {style.header}>
            <h1 className={style.title}>Cadastro de Frutas</h1>
        </div>
        <form onSubmit={handleSubmit} className={style.form} >
            <div className={style.inputGroup}>
                 <label >Nome da Fruta:</label>
                 <input  
                 type="text" 
                 name="name"
                 value={fruit.name}
                 onChange={(e) => setFruit({...fruit , name: e.target.value})}
                 placeholder='Digite o nome da fruta' 
                 />
                 {errors.name && <p className={style.error}>{errors.name}</p>}

            </div>
            <div className={style.inputGroup}>
                 <label >Preço:</label>
                 <input 
                 type='number'
                 name="price"
                 value = {fruit.price}
                 onChange={(e) => setFruit({...fruit , price: e.target.value})}
                 placeholder='Digite o preço da fruta'/>
                {errors.price && <p className={style.error}>{errors.price}</p>}
            </div>
            <div className={style.inputGroup}>
                 <label >Descrição:</label>
                 <input  
                 type='text'
                 name="description"
                 value = {fruit.description}
                 onChange={(e) => setFruit({...fruit , description: e.target.value})}
                 placeholder='Digite a descrição da fruta'/>
                {errors.description && <p className={style.error}>{errors.description}</p>}
            </div>
            <div className={style.inputGroup}>
                 <label >Imagem:</label>
                    <input 
                    type="text"
                    name="image"
                    value={fruit.image} 
                    onChange={(e) => {setFruit({...fruit , image:e.target.value})}}
                    placeholder='Digite a URL da imagem da fruta'/>
                    {errors.image && <p className={style.error}>{errors.image}</p>}
            </div>

            <div className={style.buttonContainer}>
                <button type='submit' className={style.registerButton} >Cadastrar Fruta</button>
            </div>

            {sucesso && <p className={style.sucesso}>{sucesso}</p>}
           
           

        </form>
       
      
    </div>
  );
}

export default RegisterFruits;