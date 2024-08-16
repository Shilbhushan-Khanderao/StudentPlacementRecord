package com.cdac.placement.service;

import com.cdac.placement.model.Batch;

import java.util.List;

public interface BatchService {

    public Batch getBatch(int batchId);
    public List<Batch> getAllBatches();
    public boolean deleteAllBatches();
    public boolean addBatch(Batch batch);
    public boolean updateBatch(Batch batch);
    public boolean deleteBatch(Integer batchId);
}
