package com.cdac.placement.serviceImpl;

import com.cdac.placement.model.Mentor;
import com.cdac.placement.repository.MentorRepository;
import com.cdac.placement.service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class MentorServiceImpl implements MentorService {
    @Autowired
    private MentorRepository mentorRepository;

    @Override
    public List<Mentor> getAllMentors() {
        return mentorRepository.findAll();
    }
    @Override
    public Mentor getMentor(int mentorId) {
        try {
            Optional<Mentor> opt = mentorRepository.findById(mentorId);
            return opt.orElse(null);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean deleteAllMentors() {
        try {
            mentorRepository.deleteAll();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean addMentor(Mentor mentor) {
        try {
            Optional<Mentor> opt = mentorRepository.findById(mentor.getId());
            if (opt.isPresent())
                return false;
            mentorRepository.save(mentor);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateMentor(Mentor mentor) {
        try {
            Optional<Mentor> opt = mentorRepository.findById(mentor.getId());

            if(opt.isPresent()){
                mentorRepository.save(mentor);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deleteMentor(Integer mentorId) {
        try {
            Optional<Mentor> opt = mentorRepository.findById(mentorId);
            if (opt.isPresent()){
                mentorRepository.deleteById(mentorId);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
