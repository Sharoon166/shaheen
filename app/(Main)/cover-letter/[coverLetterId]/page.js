export default async function CoverLetter({ params }) {
    const { coverLetterId } = await params;
    return <div>
        <h1>Cover Letter Page</h1>
        <p>This is the cover letter for ID: {coverLetterId}</p>

    </div>
}