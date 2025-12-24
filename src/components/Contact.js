
const Contact = ( ) => {

    return (

        <div>

              <h1 className = "text-2xl font-bold p-4 m-4">Contact Us </h1>
              <form>
                <input type="text" className= "border border-black p-2 m-2" placeholder="Name" />
                <input type="email" className= "border border-black p-2 m-2" placeholder="Email" />
                <button type="submit" className="bg-blue-500 text-white p-2 m-2 rounded">Submit</button>
              </form>

        </div>
    );
};
export default Contact;             