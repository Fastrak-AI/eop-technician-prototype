import { useState } from "react";
import { PencilIcon, SaveIcon } from "lucide-react";

interface TechnicianNotesCardProps {
  initialNotes?: string;
  onSave?: (notes: string) => void;
  readOnly?: boolean;
}

export default function TechnicianNotesCard({
  initialNotes = "",
  onSave,
  readOnly = false,
}: TechnicianNotesCardProps) {
  const [notes, setNotes] = useState(initialNotes);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      if (onSave) {
        onSave(notes);
      }
      setIsEditing(false);
      setIsSaving(false);
    }, 500);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 mb-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-[#F0F9FF] p-2 rounded-full mr-3">
            <PencilIcon className="h-5 w-5 text-[#0EA5E9]" strokeWidth={1.5} />
          </div>
          <h3 className="text-base font-medium">Technician Notes</h3>
        </div>

        {!readOnly && !isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-xs text-[#0EA5E9] font-medium hover:underline"
          >
            Edit
          </button>
        )}

        {isEditing && (
          <button
            onClick={handleSave}
            disabled={isSaving}
            className={`flex items-center text-xs font-medium px-3 py-1 rounded-full ${
              isSaving
                ? "bg-gray-100 text-gray-400"
                : "bg-[#0EA5E9] text-white hover:bg-[#0B8BC3]"
            } transition-colors duration-200`}
          >
            <SaveIcon className="h-3 w-3 mr-1" />

            {isSaving ? "Saving..." : "Save"}
          </button>
        )}
      </div>

      {isEditing ? (
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add your notes about this service here..."
          className="w-full min-h-[120px] p-3 text-sm text-gray-700 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent outline-none resize-none"
          autoFocus
        />
      ) : (
        <div className="text-sm text-gray-700 leading-relaxed min-h-[40px]">
          {notes ? (
            notes
          ) : (
            <span className="text-gray-400 italic">
              {readOnly
                ? "No notes added"
                : "Click 'Edit' to add notes about this service"}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
