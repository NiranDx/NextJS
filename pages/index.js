import MainLayout from '../layouts/MainLayout'
const App = () => {
    return (
        <MainLayout>
            <div className='container row'>
                <div className='bg'>
                    <img src="../static/img/bg.jpg" className='bg'/>
                </div>
                <div className='row box-search'>
                    <div className='input-box'>
                        <input type='text' placeholder='Find something' className='input-box'></input>
                    </div>
                    <div>
                        <button className='btn-s'>Search</button>
                    </div>
                    
                    
                </div>
            </div>

            <style jsx>{`
                .bg{
                    width: 100%;
                    height: 50vh;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    z-index: 0;
                }
                .box-search{
                    width: 40%;
                    height: 50px;
                    display:flex;
                    justify-content: space-between;
                    background-color: red;
                    margin-left: auto;
                    margin-right: auto;
                    padding: 20px 20px;
                    border-radius: 20px;
                    align-items: center;
                }
                .input-box{
                    height: 60px;
                    width: 400px;
                    border-radius: 15px;
                }
                .btn-s{
                    border-radius: 5px;
                    height: 60px;
                    width: 100px;
                    background-color: blue;
                    color: white;
                }
                
                    
                    
                    `}</style>
        </MainLayout>

    )

}
export default App;