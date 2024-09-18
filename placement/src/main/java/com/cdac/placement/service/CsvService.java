package com.cdac.placement.service;

import org.springframework.web.multipart.MultipartFile;

public interface CsvService {
    public void save(MultipartFile file, String name);
}
