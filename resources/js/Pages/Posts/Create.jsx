import { useForm } from "@inertiajs/react";

function Create() {
       const { data, setData, post, errors, processing } = useForm({
        body: "",
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post("/posts");
    };

  return (
    <>
    
         <h1 className="title">Create a new post</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows="1"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    ></textarea>

                    {errors.body && <p className="error">{errors.body}</p>}

                    <button className="primary-btn mt-4" disabled={processing}>
                        Create Post
                    </button>
                </form>
            </div>
    </>
  )
}

export default Create


