"use client";

import { useState } from "react";

type Student = {
  id: number;
  sportId: string;
  name: string;
  dob: string;
  gender: string;
  admissionNo: string;
  parentName: string;
  parentPhone: string;
  bloodGroup: string;
};

type Enrollment = {
  sportId: string;
};

type Section = {
  name: string;
  students: Enrollment[];
};

type Grade = {
  grade: number;
  sections: Section[];
};

type AcademicYear = {
  year: string;
  grades: Grade[];
};

export default function TeacherPage() {
  /* ---------------- MASTER DATABASE ---------------- */

  const [students, setStudents] = useState<Student[]>([]);

  /* ---------------- ACADEMIC YEARS ---------------- */

  const [years, setYears] = useState<AcademicYear[]>([
    {
      year: "2026-27",
      grades: [],
    },
  ]);

  const [activeYear, setActiveYear] = useState(0);

  const [selectedClass, setSelectedClass] = useState<{
    grade: number;
    section: string;
  } | null>(null);

  /* ---------------- MODALS ---------------- */

  const [showYearModal, setShowYearModal] = useState(false);
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [showChoiceModal, setShowChoiceModal] = useState(false);
  const [showNewStudentModal, setShowNewStudentModal] =
    useState(false);
  const [showExistingModal, setShowExistingModal] =
    useState(false);

  /* ---------------- FORM STATE ---------------- */

  const [newYear, setNewYear] = useState("2027-28");
  const [grade, setGrade] = useState("1");
  const [section, setSection] = useState("");

  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    dob: "",
    gender: "",
    admissionNo: "",
    parentName: "",
    parentPhone: "",
    bloodGroup: "",
  });

  const currentYear = years[activeYear];

  const classroom =
    selectedClass &&
    currentYear.grades
      .find((g) => g.grade === selectedClass.grade)
      ?.sections.find(
        (s) => s.name === selectedClass.section
      );

  /* Convert SportDNA IDs into full student objects */

  const classroomStudents =
    classroom?.students
      .map((e) =>
        students.find((s) => s.sportId === e.sportId)
      )
      .filter(Boolean) as Student[];

  /* Search the MASTER database */

  const filteredStudents = students.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.sportId
        .toLowerCase()
        .includes(search.toLowerCase())
  );

    /* ---------------- FUNCTIONS ---------------- */

  function createAcademicYear() {
    if (!newYear.trim()) return;

    setYears([
      ...years,
      {
        year: newYear,
        grades: [],
      },
    ]);

    setNewYear("");
    setShowYearModal(false);
  }

  function createGrade() {
    if (!section.trim()) return;

    const updated = [...years];
    const year = updated[activeYear];

    const existing = year.grades.find(
      (g) => g.grade === Number(grade)
    );

    if (existing) {
      const alreadyExists = existing.sections.find(
        (s) => s.name === section
      );

      if (!alreadyExists) {
        existing.sections.push({
          name: section,
          students: [],
        });
      }
    } else {
      year.grades.push({
        grade: Number(grade),
        sections: [
          {
            name: section,
            students: [],
          },
        ],
      });

      year.grades.sort((a, b) => a.grade - b.grade);
    }

    setYears(updated);
    setGrade("1");
    setSection("");
    setShowGradeModal(false);
  }

  function createStudent() {
    if (!selectedClass || !form.name.trim()) return;

    const sportId = `SD${String(students.length + 1).padStart(
      6,
      "0"
    )}`;

    const newStudent: Student = {
      id: Date.now(),
      sportId,
      ...form,
    };

    setStudents([...students, newStudent]);

    const updated = [...years];

    const sec =
      updated[activeYear].grades
        .find((g) => g.grade === selectedClass.grade)!
        .sections.find(
          (s) => s.name === selectedClass.section
        )!;

    sec.students.push({
      sportId,
    });

    setYears(updated);

    setForm({
      name: "",
      dob: "",
      gender: "",
      admissionNo: "",
      parentName: "",
      parentPhone: "",
      bloodGroup: "",
    });

    setShowNewStudentModal(false);
  }

  function assignExisting(student: Student) {
    if (!selectedClass) return;

    const updated = [...years];

    const sec =
      updated[activeYear].grades
        .find((g) => g.grade === selectedClass.grade)!
        .sections.find(
          (s) => s.name === selectedClass.section
        )!;

    const alreadyAssigned = sec.students.some(
      (s) => s.sportId === student.sportId
    );

    if (!alreadyAssigned) {
      sec.students.push({
        sportId: student.sportId,
      });
    }

    setYears(updated);
    setSearch("");
    setShowExistingModal(false);
  }

    return (
    <main className="min-h-screen bg-[#06172B] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 border-r border-white/10 p-6">
        <h1 className="text-2xl font-black">
          SPORT<span className="text-cyan-400">DNA</span>
        </h1>

        <p className="text-slate-400 text-sm mt-8">Teacher Portal</p>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-8 overflow-y-auto">
        {!selectedClass ? (
          <>
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
                  Academic Years
                </p>

                <h1 className="text-4xl font-black mt-2">
                  School Dashboard
                </h1>
              </div>

              <button
                onClick={() => setShowYearModal(true)}
                className="bg-cyan-400 text-[#06172B] px-5 py-3 rounded-xl font-bold"
              >
                + New Year
              </button>
            </div>

            {/* Academic Year Tabs */}
            <div className="flex gap-3 mb-8 flex-wrap">
              {years.map((year, index) => (
                <button
                  key={year.year}
                  onClick={() => setActiveYear(index)}
                  className={`px-5 py-3 rounded-xl font-semibold transition ${
                    activeYear === index
                      ? "bg-cyan-400 text-[#06172B]"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  {year.year}
                </button>
              ))}
            </div>

            {/* Current Year */}
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold">{currentYear.year}</h2>

              <button
                onClick={() => setShowGradeModal(true)}
                className="bg-cyan-400 text-[#06172B] px-4 py-2 rounded-xl font-bold"
              >
                + Add Grade
              </button>
            </div>

            {/* Grade Cards */}
            {currentYear.grades.length === 0 ? (
              <div className="rounded-3xl bg-white/5 border border-white/10 py-24 text-center">
                <div className="text-5xl mb-4">🎓</div>

                <h3 className="text-2xl font-bold">
                  No grades created
                </h3>

                <p className="text-slate-400 mt-2">
                  Create Grade 1–12 and add sections.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {currentYear.grades.map((g) => (
                  <div
                    key={g.grade}
                    className="rounded-3xl bg-white/5 border border-white/10 p-6"
                  >
                    <h3 className="text-2xl font-bold mb-4">
                      Grade {g.grade}
                    </h3>

                    <div className="flex gap-3 flex-wrap">
                      {g.sections.map((sec) => (
                        <button
                          key={sec.name}
                          onClick={() =>
                            setSelectedClass({
                              grade: g.grade,
                              section: sec.name,
                            })
                          }
                          className="px-4 py-2 rounded-xl bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400 hover:text-[#06172B] transition"
                        >
                          {sec.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            {/* Classroom */}
            <button
              onClick={() => setSelectedClass(null)}
              className="text-cyan-400 mb-6"
            >
              ← Back to Grades
            </button>

            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-cyan-400 text-sm">
                  {currentYear.year}
                </p>

                <h1 className="text-4xl font-black">
                  Grade {selectedClass.grade}-{selectedClass.section}
                </h1>

                <p className="text-slate-400 mt-2">
                  {classroomStudents.length} Students
                </p>
              </div>

              <button
                onClick={() => setShowChoiceModal(true)}
                className="bg-cyan-400 text-[#06172B] px-5 py-3 rounded-xl font-bold"
              >
                + Add Student
              </button>
            </div>

            {classroomStudents.length === 0 ? (
              <div className="rounded-3xl bg-white/5 border border-white/10 py-20 text-center">
                <div className="text-5xl mb-4">👦</div>

                <h3 className="text-2xl font-bold">
                  No students yet
                </h3>

                <p className="text-slate-400 mt-2">
                  Add a New Joiner or Existing Student.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {classroomStudents.map((student) => (
                  <div
                    key={student.sportId}
                    className="rounded-2xl bg-white/5 border border-white/10 p-5 flex justify-between items-center hover:bg-white/10 transition"
                  >
                    <div>
                      <h3 className="font-semibold text-lg">
                        {student.name}
                      </h3>

                      <p className="text-cyan-400 text-sm">
                        {student.sportId}
                      </p>

                      <p className="text-slate-500 text-xs mt-1">
                        Admission: {student.admissionNo || "—"}
                      </p>
                    </div>

                    <button className="text-cyan-400 font-semibold">
                      Open →
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </section>

            {/* ---------- NEW ACADEMIC YEAR ---------- */}
      {showYearModal && (
        <Modal
          title="New Academic Year"
          onClose={() => setShowYearModal(false)}
        >
          <input
            className="input"
            placeholder="2027-28"
            value={newYear}
            onChange={(e) => setNewYear(e.target.value)}
          />

          <PrimaryButton
            text="Create Academic Year"
            onClick={createAcademicYear}
          />
        </Modal>
      )}

      {/* ---------- ADD GRADE ---------- */}
      {showGradeModal && (
        <Modal
          title="Add Grade & Section"
          onClose={() => setShowGradeModal(false)}
        >
          <select
            className="input"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((g) => (
              <option
                key={g}
                value={g}
                className="bg-[#102A4A] text-white"
              >
                Grade {g}
              </option>
            ))}
          </select>

          <input
            className="input mt-4"
            placeholder="Section (A, B, C...)"
            value={section}
            onChange={(e) => setSection(e.target.value.toUpperCase())}
          />

          <PrimaryButton
            text="Create Grade"
            onClick={createGrade}
          />
        </Modal>
      )}

      {/* ---------- ADD STUDENT CHOICE ---------- */}
      {showChoiceModal && (
        <Modal
          title="Add Student"
          onClose={() => setShowChoiceModal(false)}
        >
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setShowChoiceModal(false);
                setShowNewStudentModal(true);
              }}
              className="rounded-2xl bg-cyan-400/10 border border-cyan-400/30 p-5 text-left hover:bg-cyan-400 hover:text-[#06172B] transition"
            >
              <div className="text-3xl">🆕</div>
              <h3 className="font-bold mt-3">New Joiner</h3>
              <p className="text-sm mt-2">
                Create a new SportDNA profile
              </p>
            </button>

            <button
              onClick={() => {
                setShowChoiceModal(false);
                setShowExistingModal(true);
              }}
              className="rounded-2xl bg-white/5 border border-white/10 p-5 text-left hover:bg-white/10 transition"
            >
              <div className="text-3xl">🔍</div>
              <h3 className="font-bold mt-3">
                Existing Student
              </h3>
              <p className="text-sm mt-2 text-slate-400">
                Search any previous year
              </p>
            </button>
          </div>
        </Modal>
      )}

      {/* ---------- NEW JOINER ---------- */}
      {showNewStudentModal && (
        <Modal
          title="New Joiner Admission"
          onClose={() => setShowNewStudentModal(false)}
        >
          <div className="space-y-4">
            <input
              className="input"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                className="input"
                value={form.dob}
                onChange={(e) =>
                  setForm({ ...form, dob: e.target.value })
                }
              />

              <select
                className="input"
                value={form.gender}
                onChange={(e) =>
                  setForm({ ...form, gender: e.target.value })
                }
              >
                <option value="">Gender</option>
                <option className="bg-[#102A4A]">Male</option>
                <option className="bg-[#102A4A]">Female</option>
              </select>
            </div>

            <input
              className="input"
              placeholder="Admission Number"
              value={form.admissionNo}
              onChange={(e) =>
                setForm({
                  ...form,
                  admissionNo: e.target.value,
                })
              }
            />

            <input
              className="input"
              placeholder="Parent Name"
              value={form.parentName}
              onChange={(e) =>
                setForm({
                  ...form,
                  parentName: e.target.value,
                })
              }
            />

            <input
              className="input"
              placeholder="Parent Phone"
              value={form.parentPhone}
              onChange={(e) =>
                setForm({
                  ...form,
                  parentPhone: e.target.value,
                })
              }
            />

            <select
              className="input"
              value={form.bloodGroup}
              onChange={(e) =>
                setForm({
                  ...form,
                  bloodGroup: e.target.value,
                })
              }
            >
              <option value="">Blood Group</option>
              {[
                "A+",
                "A-",
                "B+",
                "B-",
                "AB+",
                "AB-",
                "O+",
                "O-",
              ].map((b) => (
                <option
                  key={b}
                  value={b}
                  className="bg-[#102A4A]"
                >
                  {b}
                </option>
              ))}
            </select>
          </div>

          <PrimaryButton
            text="Create Student Profile"
            onClick={createStudent}
          />
        </Modal>
      )}

      {/* ---------- EXISTING STUDENT ---------- */}
      {showExistingModal && (
        <Modal
          title="Assign Existing Student"
          onClose={() => {
            setShowExistingModal(false);
            setSearch("");
          }}
        >
          <input
            className="input"
            placeholder="Search SportDNA ID or Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="mt-5 max-h-80 overflow-y-auto space-y-3">
            {filteredStudents.length === 0 ? (
              <div className="text-center text-slate-400 py-8">
                No students found
              </div>
            ) : (
              filteredStudents.map((student) => (
                <button
                  key={student.sportId}
                  onClick={() => assignExisting(student)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 p-4 text-left hover:bg-white/10 transition"
                >
                  <h3 className="font-semibold">
                    {student.name}
                  </h3>

                  <p className="text-cyan-400 text-sm">
                    {student.sportId}
                  </p>

                  <p className="text-slate-500 text-xs mt-1">
                    Parent: {student.parentName || "—"}
                  </p>
                </button>
              ))
            )}
          </div>
        </Modal>
      )}
    </main>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-lg rounded-3xl bg-[#0B2548] border border-white/10 p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">{title}</h2>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

function PrimaryButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full mt-6 bg-cyan-400 text-[#06172B] rounded-xl py-3 font-bold hover:scale-[1.02] transition"
    >
      {text}
    </button>
  );
}