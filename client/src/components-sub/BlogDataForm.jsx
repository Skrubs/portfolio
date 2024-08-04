import { useState } from 'react'; // Import useState from React

export default function BlogDataForm(userid) {
    const [blogData, setBlogData] = useState('');


    const blogChange = (event) => {
        setBlogData(event.target.value);
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            const response = await fetch('/messages/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({userid, blogData}),
            });

            if (!response.ok) {
                throw new Error('Failed to submit blog data');
            }


            const result = await response.json();
            console.log('Blog data submitted successfully:', result);
        } catch (error) {
            console.error('Error submitting blog data:', error);
        }
    };

    return (
        <>
            <div className={'flex flex-col m-1'}>
                <form onSubmit={handleSubmit}>
                    <input
                        value={blogData}
                        onChange={blogChange}
                        className={'flex flex-col h-32 w-[400px] mb-2 whitespace-pre-wrap overflow-wrap-break-word width-100px'}
                        type={'text'}
                        id={''}
                        placeholder={'Enter Blog'}
                    />
               </form>
            </div>
        </>
    );
}
