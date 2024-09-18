package com.cdac.placement.helper;

import com.cdac.placement.model.Batch;
import com.cdac.placement.model.Faculty;
import com.cdac.placement.model.Mentor;
import com.cdac.placement.repository.BatchRepository;
import com.cdac.placement.repository.FacultyRepository;
import com.cdac.placement.repository.MentorRepository;

public class StudentHelper {

    public static Mentor getOrCreateMentorForStudent(Mentor mentor, MentorRepository mentorRepository){
        Mentor mentor1 = mentorRepository.findByName(mentor.getName());
        if(mentor1 == null)
            return mentorRepository.save(new Mentor(mentor.getName()));
        return mentor1;
    }

    public static Faculty getOrCreateFacultyForStudent(Faculty faculty, FacultyRepository facultyRepository){
        Faculty faculty1 = facultyRepository.findByName(faculty.getName());
        if(faculty1 == null)
            return facultyRepository.save(new Faculty(faculty.getName()));
        return faculty1;
    }

    public static Batch getOrCreateBatchForStudent(Batch batch, BatchRepository batchRepository){
        Batch batch1 = batchRepository.findByName(batch.getName());
        if(batch1 == null)
            return batchRepository.save(new Batch(batch.getName()));
        return batch1;
    }

}
