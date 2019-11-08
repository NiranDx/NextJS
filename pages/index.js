import MainLayout from '../layouts/MainLayout'
const App = () => {
    return (
        <MainLayout>
            <div className='container row'>
                <div className='bg'>
                    <img src="/static/img/bg.jpg" />

                    <div className='row box-search'>
                        <div>
                            <input type='text' placeholder='Find something' className='input-box'></input>
                        </div>
                        <div>
                            <button className='btn-s'>Search</button>
                        </div>
                    </div>

                    <div className='row box-info'>
                        <div className='text-info'>
                            <h3>Storage</h3>
                            <p>Keep your product data <br /> Into the database</p>
                        </div>
                        <div className='text-info'>
                            <h3>Accessible</h3>
                            <p>The product Information <br /> can be easily <br /> accessed by anyone</p>
                        </div>
                    </div>

                </div>



            </div>

            <style jsx>{`
                
                .bg img{
                    width: 100%;
                    height: 50ch;
                    background-position: center;
                    background-repeat: repeat;
                    background-size: cover;
                }
                .box-search{
                    width: 40%;
                    height: 50px;
                    display:flex;
                    justify-content: space-around;
                    margin-left: auto;
                    margin-right: auto;
                    padding: 20px 20px;
                    border-radius: 20px;
                    align-items: center;
                    margin-top: -25px;
                    
                }
                .input-box{
                    border: none;
                    height: 60px;
                    width: 420px;
                    border-radius: 15px;
                    overflow: hidden;
                    background-repeat: no-repeat;
                    font-size: 24px;
                    box-shadow:rgba(0,0,0,0.2)0px 1px 2px;

                    padding: 0 20px;
                }
                .input-box:focus{
                    outline: none;

                }
                .btn-s{
                    border: none;
                    border-radius: 15px;
                    height: 50px;
                    width: 100px;
                    background-color: #00cccc;
                    color: white;
                    overflow: hidden;
                    font-size: 20px;
                
                }
                .box-info{
                    margin-left: auto;
                    margin-right: auto;
                    width: 70%;
                    display: flex;
                    justify-content: space-around;


                }
                .text-info{
                    text-align: center;
                }
                ::placeholder {
                    padding-left: 20px;
                    color: grey;
                }
                
                    
                    
                    `}</style>
        </MainLayout>

    )

}
export default App;