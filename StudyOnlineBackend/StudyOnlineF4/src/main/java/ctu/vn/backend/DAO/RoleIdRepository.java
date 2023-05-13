package ctu.vn.backend.DAO;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ctu.vn.backend.entity.RoleId;

@Repository
@Qualifier("roleIdRepository")
public interface RoleIdRepository extends JpaRepository<RoleId, Integer> {
}