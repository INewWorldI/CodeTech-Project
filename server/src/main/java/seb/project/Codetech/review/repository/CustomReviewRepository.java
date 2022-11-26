package seb.project.Codetech.review.repository;

import java.util.List;

import seb.project.Codetech.product.entity.Type;
import seb.project.Codetech.review.dto.ReviewResponseDto;
import seb.project.Codetech.review.entity.Review;

public interface CustomReviewRepository {
	List<ReviewResponseDto.Post> findByReviewResponseDto(Review review);
	ReviewResponseDto.TypeSearch findByTypeReviewResponseDto(Type type);
}