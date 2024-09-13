package com.cdac.placement.serviceImpl;

import com.cdac.placement.model.Batch;
import com.cdac.placement.repository.BatchRepository;
import com.cdac.placement.service.BatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BatchServiceImpl implements BatchService {
    @Autowired
    private BatchRepository batchRepository;

    @Override
    public List<Batch> getAllBatches() {
        return batchRepository.findAll();
    }
    @Override
    public Batch getBatch(Long batchId) {
        try{
            Optional<Batch> opt = batchRepository.findById(batchId);
            return opt.orElse(null);
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean deleteAllBatches() {
        try {
            batchRepository.deleteAll();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean addBatch(Batch batch) {
        try {
            Optional<Batch> opt = batchRepository.findById(batch.getId());
            if (opt.isPresent())
                return false;
            batchRepository.save(batch);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateBatch(Batch batch) {
        try {
            Optional<Batch> opt = batchRepository.findById(batch.getId());

            if(opt.isPresent()){
                batchRepository.save(batch);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean deleteBatch(Long batchId) {
        try {
            Optional<Batch> opt = batchRepository.findById(batchId);
            if (opt.isPresent()){
                batchRepository.deleteById(batchId);
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
