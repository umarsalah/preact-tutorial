export default function Profile({ userId }: { userId: string }) {
    return (
        <div>
            <h1>Profile</h1>
            <p>Hello from User: {userId}</p>
        </div>
    );

}