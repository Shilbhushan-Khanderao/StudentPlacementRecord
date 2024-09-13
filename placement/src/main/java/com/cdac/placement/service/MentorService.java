package com.cdac.placement.service;

import com.cdac.placement.model.Mentor;

import java.util.List;

public interface MentorService {

    public Mentor getMentor(Long mentorId);
    public List<Mentor> getAllMentors();
    public boolean deleteAllMentors();
    public boolean addMentor(Mentor mentor);
    public boolean updateMentor(Mentor mentor);
    public boolean deleteMentor(Long mentorId);
}
