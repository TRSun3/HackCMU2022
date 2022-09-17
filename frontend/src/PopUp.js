export default function PopUp (location) {
    console.log("Inside popup", location)
    return (
        <h1>
            {location.src}
        </h1>
    )
}