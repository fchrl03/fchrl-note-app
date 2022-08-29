import '../styles/sectionnotes.css';
import Card from './Card';

const SectionNotes = ({ label, notes, setNotes }) => {
  return (
    <section>
      <h2 className="heading_section">{label}</h2>
      {notes.length === 0 ? (
        <p className="empty_note">Tidak ada catatan.</p>
      ) : (
        <div className="list_of_notes">
          {notes?.map((note) => (
            <Card key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SectionNotes;
