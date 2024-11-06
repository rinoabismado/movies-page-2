import { count } from 'process';
import { title } from "process";
import './styles.css';

function Form (){
    const movies = {
        id: 1,
        Image: "https://th.bing.com/th/id/OIP.iCObhs22oMw5Tk6qk5yVRAHaLG?rs=1&pid=ImgDetMain",
        title: "transformers one",
        cont:2,
        score: 4.0
    }
 
    return (

   <div className="movies-form-container">
    <img className= 'movies-card-image' src={movies.Image} alt="transformers" />
    <div className="movies-card-bottom-container">
        <h3>
        Transformers one
        </h3>
        <form className="movies-form">
                                <div className="form-group movies-form-group">
                                    <label htmlFor="email">
                                        informe seu e-mail
                                    </label>
                                    <input className="form-control" type="email" id="emai"/>

                                </div>
                                <div className="form-group movies-form-group">
                                    <label htmlFor="score">
                                        informe sua avaliação
                                    </label>
                                    <select className="form-control" id="score">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="movies-form-btn-container">
                                <button className="btn movies-btn" type="submit">SALVAR</button>
                                </div>
                            </form>
                           
                                <button className="btn movies-btn mt-3">CANCELAR</button>

                            </div>
                        </div>  
    );
} 

export default Form;